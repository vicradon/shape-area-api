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
 *     summary: Returns a paginated collection of previous calculations.
 *     description: Returns a paginated collection of previous calculations.
 *     parameters:
 *       - name: page
 *         description: The current page of calculations
 *         in: query
 *         required: false
 *         type: integer
 *         example: 2
 *     responses:
 *       200:
 *         description: The set of calculations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                  type: integer
 *                  example: 1
 *                 next_page:
 *                  type: null
 *                  example: null
 *                 status:
 *                  type: string
 *                  example: success
 *                 message:
 *                  type: string
 *                  example: successfully fetched calculations
 *                 calculations:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: interger
 *                          shape:
 *                              type: string
 *                          area:
 *                              type: integer
 *                          UserId:
 *                              type: interger
 *                          createdAt:
 *                              type: Date
 *                          updatedAt:
 *                              type: Date
 *                      example:
 *                          - id: 1
 *                            shape: square
 *                            area: 36
 *                            UserId: 1
 *                            createdAt: 2021-02-06T01:00:09.977Z
 *                            updatedAt: 2021-02-06T01:00:09.977Z
 *                          - id: 1
 *                            shape: square
 *                            area: 4
 *                            UserId: 1
 *                            createdAt: 2021-02-06T01:00:15.331Z
 *                            updatedAt: 2021-02-06T01:00:15.331Z
 */
