import React from 'react';

export async function fetchAndFilterData(userInput: string) {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const filteredData = data.filter((item: any) => item.yourProperty.toLowerCase().includes(userInput.toLowerCase()));
    return filteredData;
  } catch (error) {
    console.error('An error occurred while fetching the JSON data: ', error);
  }
}