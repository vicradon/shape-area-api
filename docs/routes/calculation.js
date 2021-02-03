/**
 * @swagger
 * /api/v1/calculations/:
 *   post:
 *     summary: Calculates the area of the given shape.
 *     description: This endpoint calculates the area of the given shape.
 *     parameters:
 *       - name: shape
 *         description: The name of the shape
 *         in: body
 *         required: true
 *         type: string
 *         example: square
 *       - name: dimensions
 *         description: The parameters required for the shape's area calculation
 *         in: body
 *         required: true
 *         type: object
 *         example:
 *           side: 4
 *     responses:
 *       200:
 *         description: The calculated area
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 area:
 *                  type: integer
 *                  example: 16
 *       400:
 *         description: The side was not provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                  type: string
 *                  example: "length of side must be supplied for square"
 *                 status:
 *                  type: string
 *                  example: error
 *
 * /api/v1/calculations:
 *   get:
 *     summary: Returns JWT for registered user.
 *     description: Creates a new user and returns a JSON Web Token (JWT).
 *     parameters:
 *       - name: email
 *         description: A user's email
 *         in: body
 *         required: true
 *         type: string
 *         example: johndoe@email.com
 *       - name: password
 *         description: A user's password
 *         in: body
 *         required: true
 *         type: string
 *         example: "correct horse battery staple"
 *     responses:
 *       200:
 *         description: A user object and JWT
 *         example:
 */
