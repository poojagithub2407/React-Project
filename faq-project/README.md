# FAQ Component

## Overview

The FAQ Component is a React-based component designed to display a list of frequently asked questions (FAQs) along with their corresponding answers in a collapsible format.

## Usage

To use the FAQ Component in your React application, follow these steps:

1. **Installation**: Install the necessary dependencies using npm:

   npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

## Component

# FAQComp

The FAQComp component renders the list of FAQ items using the provided data. Each FAQ item is represented by the FAQItem component.

# Props

- faqDatas: An array of objects containing FAQ data, where each object has question and answer properties.

# FAQItem

- The FAQItem component represents an individual FAQ item. It manages the state to toggle the display of the answer when the question is clicked.
- Props
- faqData: An object containing the FAQ data with question and answer properties.
- index: The index of the FAQ item in the list.

## Styling

- Basic styling is applied to the FAQ components to improve readability and user experience. You can customize the styles according to your project requirements.
