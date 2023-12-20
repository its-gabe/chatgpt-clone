import OpenAI from "openai";

module.exports = class openai {
    static configuration() {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    static textCompletion(hero_name){
        return{
            const: hero_name = "forneça o nome do super herói com base nas próximas características que irei mandar",
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                    "content": hero_name,
                }
            ],
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}



const response = await openai.chat.completions.create();