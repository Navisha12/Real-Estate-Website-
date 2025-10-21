
import { GoogleGenAI } from "@google/genai";
import type { Property } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generatePropertyDescription = async (property: Property): Promise<string> => {
  const prompt = `
    Write a compelling and attractive real estate marketing description for the following property.
    Keep it to one paragraph, around 4-6 sentences.
    Highlight its best features in a way that appeals to potential buyers.
    Do not use bullet points or lists.

    Property Details:
    - Type: ${property.type}
    - Location: ${property.city}, ${property.state}
    - Price: $${property.price.toLocaleString()}
    - Size: ${property.sqft} sqft
    - Bedrooms: ${property.bedrooms}
    - Bathrooms: ${property.bathrooms}
    - Year Built: ${property.yearBuilt}
    - Key Features: ${property.description}

    Generate the description now.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating property description:", error);
    return "This beautiful property offers a unique blend of comfort and style. With spacious rooms and modern amenities, it's the perfect place to call home. Don't miss out on this incredible opportunity to live in a wonderful neighborhood.";
  }
};
