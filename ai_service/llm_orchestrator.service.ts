import { Injectable } from "@nestjs/common";
import { ChatOpenAI } from "@langchain/openai";

@Injectable()
export class LLMOrchestratorService {
  private model = new ChatOpenAI({ modelName: "gpt-4" });

  async generateResponse(prompt: string) {
    return await this.model.invoke(prompt);
  }
}