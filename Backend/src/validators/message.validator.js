import { z } from "zod";

const messageFromValidator = z.object({
    message: z
        .string()
        .min(5, "The message should be more than 5 characters.")
        .max(500, "The message should be less than 500 characters.")
});

export default messageFromValidator;