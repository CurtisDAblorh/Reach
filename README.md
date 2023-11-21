# Reach
Reach Industries Frontend Assessment
 00d518135e468c093175a7b4646e9f63dd1d32a4

# Libraries Used
- clsx - This library was used in my SideNav.tsx file for the Sidebar. It was a great help to be able to open and close the side bar conditionally based on the state of the boolean prop "isOpen". 
- luxon - This library was used in my Livechat.tsx file to be able to get the exact instance to the second, of the time a message came in through the websocket channel. This would later be pushed into an array and called upon to display the time the message was received next to the user's name in the UI.
 
# Resources Used
- Vite - This is the build tool I chose to use because of it's speed and how easy it is to set up a React + tailwind app by simply running "npm init vite".
- Tailwind CSS - This was the css framework I chose to use due to both it's utility classes and ability to work with clsx to conditionally render css. This was also the best for improving the mobile design as I could assign different utility classes to different break points and test them quite easily.


# Design Approach
- I started off by looking for exemplar mock ups of different web designs to get a rough idea of what I wanted the page to look like.
- From there I created divs and placed stock images and videos in them to work on the css and improve the overall layout to a feasible design.
- After this I created components for each deliverable and worked on the functionality of the code ensuring it met all the requirements that I could manage to achive within the deadline.
- Once I was happy with the responsiveness and how the components were running I went back to complete the CSS, adding a background etc to improve on the aesthetics of the app.
- This was also where I worked on the breakpoints for mobile responsiveness.

# Constraints
- The first constraint was with the Annotation Data Viewer running as an overlay on the video. I eventually managed to link the two using a boolean "isPlaying" to pause the execution of the annotation data  being fed through to the overlay while the video is paused. Unfortunately this would only work until the video was completed and consequently the annotation data had been mapped through, meaning if a user pressed play again the annotation data would not have restarted the mapping.The page would need to be reloaded to achieve the same start point. Scrubbing through the video to see the annotation data is also not possible with this approach.
- If I had more time I would have liked to find a way to link the video frames or at least the slider to the indexed frames of the annotation data so it can be scrubbed through and annotation data viewed at any point in the video for that exact frame. I would estimate this would take a few hours and I would start by checking the available properties of the video tag and which can be used to achieve this with a combination of state variables that can be passed as props if needed. 
- The second would be uploading comments to the live chat feed. This would be down to the websocket configuration and possibly using the socket.io library to complete this which I estimate would take 3 - 4 hours if I had the access to do so.


Personal Comments
- This was overall quite a fun and challenging project so I would like to say a big thank you to Reach Industries for allowing me the opportunity!

























<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
# Reach
Reach Industries Frontend Assessment
>>>>>>> 00d518135e468c093175a7b4646e9f63dd1d32a4
