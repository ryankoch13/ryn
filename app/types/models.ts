declare enum Claude {
    Claude = 'claude-3-opus-20240229',
    ClaudeInstant = 'claude-3-haiku-20240307',
}

declare enum Cohere {
    Cohere = 'cohere',
    CohereWeb = 'cohereWeb',
}

declare enum Gemini {
    Gemini = 'gemini-pro',
}

declare enum Gpt {
    GptTurbo = 'gpt-4-turbo',
    Gpt = 'gpt-4o'
}

declare enum Mistral {
    Mistral = 'mistral'
}

declare enum Default {
    Default = 'gpt-4-turbo'
}

export type LanguageModel =
    | Claude
    | Cohere
    | Gemini
    | Gpt
    | Mistral
    | Default

export const LanguageModel = {
    ...Claude,
    ...Cohere,
    ...Gemini,
    ...Gpt,
    ...Mistral,
    ...Default,
}