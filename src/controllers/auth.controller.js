import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;

export const login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email y contraseña requeridos"
        });
    }

    const token = jwt.sign(
        {
            email
        },
        secretKey,
        {
            expiresIn: "1h"
        }
    );

    res.status(200).json({
        token
    });

};