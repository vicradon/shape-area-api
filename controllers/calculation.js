const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { Calculation } = require("../models");
const { UnsuppliedParameterError } = require("../helpers/errors");

class CalculationController {
  calculate = async (req, res) => {
    const calculationSchema = Joi.object({
      shape: Joi.string().valid("circle", "square", "rectangle", "triangle"),
      dimensions: Joi.object().required(),
    });

    try {
      const { shape, dimensions } = await calculationSchema.validateAsync({
        shape: req.body.shape,
        dimensions: req.body.dimensions,
      });
      const area = this.areaComputation(shape, dimensions);

      const calculation = Calculation.build({ shape, area });
      const { user_id } = jwt.decode(req.headers.authorization.split(" ")[1]);
      calculation.UserId = user_id;
      await calculation.save();
      return res.status(200).json({
        area,
        status: "success",
        message: "successfully calculated area",
      });
    } catch (error) {
      if (error.name === "UnsuppliedParameterError") {
        return res
          .status(400)
          .json({ message: error.message, status: "error" });
      }
      return res.status(500).json({ message: error.message, status: "error" });
    }
  };
  areaComputation = (shape, dimensions) => {
    const area_formulae = {
      circle(dimensions) {
        const { radius } = dimensions;
        if (!radius) {
          throw new UnsuppliedParameterError(
            "radius must be supplied for circle"
          );
        }
        return Math.PI * radius * radius;
      },
      square(dimensions) {
        const { side } = dimensions;
        if (!side) {
          throw new UnsuppliedParameterError(
            "length of side must be supplied for square"
          );
        }
        return side * side;
      },
      rectangle(dimensions) {
        const { length, breadth } = dimensions;
        if (!length || !breadth) {
          throw new UnsuppliedParameterError(
            "length and breadth of rectangle must be supplied"
          );
        }
        return length * breadth;
      },
      triangle(dimensions) {
        const { length_a, length_b, length_c } = dimensions;
        if (!length_a || !length_b || !length_c) {
          throw new UnsuppliedParameterError(
            "length_a, length_b and length_c of triangle must be supplied"
          );
        }
        const half_of_perimeter = 0.5 * (length_a + length_b + length_c);
        const area = Math.sqrt(
          half_of_perimeter *
            (half_of_perimeter - length_a) *
            (half_of_perimeter - length_b) *
            (half_of_perimeter - length_c)
        );
        return area;
      },
    };
    return area_formulae[shape](dimensions).toFixed(2);
  };
  calculations = async (req, res) => {
    const { user_id } = jwt.decode(req.headers.authorization.split(" ")[1]);
    const calculationHistorySchema = Joi.object({
      page: Joi.number().integer().positive(),
    });
    try {
      const { page = 1 } = await calculationHistorySchema.validateAsync({
        page: req.query.page,
      });

      const { count, rows } = await Calculation.findAndCountAll({
        where: { UserId: user_id },
        offset: 10 * page - 10,
        limit: 10,
      });
      return res.status(200).json({
        calculations: rows,
        page,
        next_page: page * 10 < count ? page + 1 : null,
        status: "success",
        message: "successfully fetched calculations",
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: error.message, status: "error" });
      }
      return res.status(500).json({ message: error.message, status: "error" });
    }
  };
}

module.exports = new CalculationController();
