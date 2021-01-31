const Joi = require("joi");
const { UnsuppliedParameterError } = require("../helpers/errors");

class CalculationController {
  calculate = async (req, res) => {
    if (!req.headers.authorization) {
      return res.status(403).send("No JWT supplied");
    }
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
      return res.status(200).json({
        area: area.toFixed(2),
      });
    } catch (error) {
      console.log(error.message);
      if (error.name === "UnsuppliedParameterError") {
        res.status(400).send(error.message);
      }
      res.status(500).send(error.message);
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
    return area_formulae[shape](dimensions);
  };
}

module.exports = new CalculationController();
