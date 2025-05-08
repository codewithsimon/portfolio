---
layout: ../../layouts/BlogPost.astro
title: Faster Prototyping with AI - Google AI Studio
date: May 04, 2025
category: Gemini
excerpt: A deep dive into best practices for developing cloud-native applications using Azure services and modern architectural patterns for scalable, resilient systems.
imageUrl: /src/assets/blog/faster-prototyping-with-ai-faster-prototyping-with-ai-google-ai-studio/thumbnail.jpg
slug: faster-prototyping-with-ai-faster-prototyping-with-ai-google-ai-studio
---

Google launched its largest and most capable AI model, Gemini in late 2023. Ever since Gemini has gained a lot of popularity and has many models that can be used for different use cases. Gemini was built from the ground up to be a multimodal, that means it can generalize and seamlessly understand, operate across, and combine different types of information, including text, code, audio, image, and video. 

## What is Google AI Studio?

Google AI Studio is a web-based development environment that allows you to quickly prototype and build AI applications using Google's next-generation multimodal generative AI models, particularly the Gemini family. Think of it as a playground and workshop where you can interact with powerful AI, test its capabilities, and even integrate it into your own projects without needing deep coding expertise right away.

Upon visiting the website, you are greeted with a chat interface which looks very similar to any other LLM Chat. And, did you realise that you didn’t need any fancy email to login? Any gmail id works.

![Google AI Studio Landing Page.](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Google%20AI%20Studio%20Landing%20Page.jpg)

To get started, you can either write a prompt or you can click on the + icon to work with different kind of files like record audio, take a photo, or work with the files from your drive. At this instance let us use the _Sample Media_ and select _Sherlock Jr. (1924) - 10 min Clip_. Click _Add to Prompt_.

![Google AI Studio Landing Page.](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Working-with-Videos-in-faster-prototyping-with-ai-google-ai-studio.jpg)

Let us ask the Gemini to summarise the video and what is Sherlock wearing and press _Run + CTRL._ Also, please mote that at the bottom right of the video you can see the number of tokens that will be used in this video.

![Video Prompt](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Video-Prompt.jpg)

The response has a summary and very detailed results on What is Sherlock wearing. 

![Response](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Response.jpg)

What is also very interesting that you can click on Expand to View Model thoughts and actually read the thinking process to arrive at the summary and costume description. 

![model Thoughts](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Model%20Thoughts.jpg)


## Exploring Google AI Studio Features

Beyond the core prompting interface, Google AI Studio offers several powerful tools:

1. **Model Selection:** You can easily switch between different Gemini models available in the studio. You can even use the "Compare" feature to test the same prompt with different models side-by-side to see which performs best for your needs. (As shown in the video, Gemini Flash is often faster, while Gemini Pro might provide more detailed responses).

    ![Model Selection](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Model-Selection.jpg)

    - *Tip:* Experiment with different models to find the best balance of speed, detail, and complexity for your specific use case.
2. **Temperature:** This slider controls the *creativity* or randomness of the AI's responses (from 0 to 2).
    - Higher Temperature: More creative, potentially more surprising or varied outputs. Useful for brainstorming or generating diverse ideas.
    - Lower Temperature: More focused, predictable, and deterministic outputs. Useful for tasks requiring accuracy or consistency.

    ![ToolTemperature](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Temperature.jpg)

    - *Tip:* Start with a moderate temperature and adjust based on how creative or consistent you need the output to be.
3. **Structured Output:** This feature allows you to define the *exact format* you want the AI's response to be in, typically using a schema like JSON. This is incredibly useful for developers who need to integrate AI output into applications or databases in a reproducible way.

    ![Tools](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Tools.jpg)

    - *Tip:* Use Structured Output when the AI's response needs to be parsed or used programmatically in another system.
4. **Code Execution:** This tool allows the AI model to execute code within the environment. This can be used for calculations, running scripts, or performing other programmatic tasks based on the prompt.
    - *Tip:* Enable Code Execution when you need the AI to perform computations or generate functional code snippets based on your request.
5. **Function Calling:** A highly powerful feature that allows you to connect your AI model to external tools, APIs, or custom functions. This enables the AI to interact with the real world, pull real-time data, or perform actions outside of its core knowledge.
    - *Examples from the video:*
        - Connecting to a Weather API to get current forecasts.
        - Connecting to a Restaurant Booking API like OpenTable to make reservations.
        - Connecting to the Google Calendar API to schedule events.
    - *Tip:* Function Calling is essential for building dynamic AI applications that need to fetch information or perform actions based on user prompts.
6. **Grounding with Google Search:** This feature gives your AI model the ability to browse the internet and use Google Search results to inform its responses. This helps prevent hallucinations (making up information) and provides the AI with access to up-to-date information beyond its training data cutoff.
    - *Example from the video:* Asking about upcoming events in San Francisco for a specific date range – the AI used Google Search to find relevant festivals, conferences, and events.
    - *Tip:* Enable Grounding with Google Search when you need the AI's response to be factually accurate, current, or require information it wouldn't have from its base training.
7. **Stream Realtime:** This interactive feature allows you to engage with the AI using text, voice, video, or even screen sharing. You can talk to Gemini using your microphone, show it things using your webcam, or share your screen and get real-time feedback and instructions on what you're working on.
    - *Example from the video:* Showing Gemini a Photoshop project and asking for step-by-step instructions on how to remove an object – the AI provided guidance based on the visual input from the screen share.

    ![Streaming](/src/assets/blog/faster-prototyping-with-ai-google-ai-studio/Stream.jpg)

    - *Tip:* Use Stream Realtime for interactive learning, getting real-time help with tasks (like design or coding), or having dynamic conversations grounded in visual information.
8. **Tune a Model (Fine-tuning):** Google AI Studio allows you to fine-tune a base Gemini model on your own custom dataset directly within the UI, often without needing to write code. Fine-tuning is used to significantly improve the model's performance on a very specific or niche task.
    - *How it works:* You provide the model with a training dataset consisting of many input/output examples of the task you want it to learn (e.g., news articles as input, desired headlines as output).
    - *Why fine-tune?* To make the model highly specialized and accurate for a particular domain or style that wasn't heavily represented in its initial training. Useful for tasks like translating medical notes, summarizing legal documents, or creating a specialized ranking system based on custom criteria.
    - *Tip:* Consider fine-tuning if you have a unique task or dataset and want the AI to perform exceptionally well on it, achieving significant improvements over a general model. Google recommends 100-500 examples for tuning.
9. **Library & Prompt Gallery:** The Library stores your past prompts and tuned models, allowing you to revisit and reuse them. The Prompt Gallery provides pre-built examples and templates for various tasks, offering inspiration and a quick starting point for exploring Gemini's capabilities.
    - *Tip:* Browse the Prompt Gallery to get ideas and see practical applications of Gemini for different tasks. Save your best prompts to your Library for future use.



## Tips for Using Google AI Studio Effectively

- **Start Simple:** If the UI feels overwhelming, begin with the basic "Create Prompt" interface and gradually explore the other tools.
- **Leverage the Frameworks:** Use the TCRIER framework for general prompts and focus on Persona, Task, Output, and Context for system prompts to get more controlled and relevant results.
- **Experiment with Settings:** Play with the Temperature slider to see how it affects creativity. Explore Structured Output if you need consistent data formats.
- **Explore Starter Apps:** These provide hands-on examples of what you can build and can inspire your own projects.
- **Use Grounding for Facts:** Enable Grounding with Google Search whenever factual accuracy or current information is critical.
- **Consider Function Calling for External Interactions:** If your AI needs to do more than just generate text (like check weather or book something), Function Calling is your tool.
- **Think About Fine-tuning for Niche Tasks:** If you have a very specific task where a general model struggles, fine-tuning with your own data can yield significant improvements.
- **Don't Be Afraid to Iterate:** Perfecting prompts often takes multiple attempts. Evaluate the results and refine your input.