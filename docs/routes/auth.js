/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Creates a new user.
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                     $ref: '#/components/schemas/User'
 *                 token:
 *                     type: string
 *                     example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2MTIzMzMyNzgsImV4cCI6MTYxMjQxOTY3OH0._Exfobyn2wISywddUpjyvkcO4_31S7t23K37u5MgTPM
 *                 status:
 *                     type: string
 *                     example: success
 *                 message:
 *                     type: string
 *                     example: Signed up successfully
 *
 * /api/v1/auth/login:
 *   post:
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                     type: string
 *                     example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2MTIzMzMyNzgsImV4cCI6MTYxMjQxOTY3OH0._Exfobyn2wISywddUpjyvkcO4_31S7t23K37u5MgTPM
 *                 status:
 *                     type: string
 *                     example: success
 *                 message:
 *                     type: string
 *                     example: logged in successfully
 *
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *          type: integer
 *          example: 4
 *         first_name:
 *          type: string
 *          example: null
 *         last_name:
 *          type: string
 *          example: null
 *         email:
 *          type: string
 *          example: johndoe@email.com
 *         createdAt:
 *          type: Date
 *          example: 2021-02-03T06:21:18.289Z
 *         updatedAt:
 *          type: Date
 *          example: 2021-02-03T06:21:18.289Z
 */
