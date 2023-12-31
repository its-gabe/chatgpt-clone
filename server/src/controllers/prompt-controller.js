const InputPrompt = require("../models/input-prompt.js")
const openai = require("../config/openai.js")

module.exports = {
    async sendText(req, res){
        const openaiAPI = opneai.configuration()
        const inputModel = new InputPrompt(req.body)

        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            )
            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess:false,
                error: error.response 
                ? error.response.data :
                "there was an issue on the server"
            })
        }
    }
}