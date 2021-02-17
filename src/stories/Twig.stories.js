// // Import Twig.
// import Twig from "twig";

// // Import twig-drupal-filters.
// import twigDrupal from "twig-drupal-filters";

// Import the twig template.
import button from "./button.twig";

// Use Drupal filters for Twig.
// twigDrupal(Twig);

// Adding own Twig functions.
// Twig.extendFunction("html_classes", function (classesArray) {
//   return classesArray.join(" ");
// });

export default {
  title: "Twig Templates/Button",
  parameters: {
    // No docs page content for now.
    // docs: { page: null }
  },
  argTypes: {
    label: {
      description: "The label inside the button.",
      control: "text",
      table: {
        type: { summary: "string" }
      }
    },
    _defaultClass: {
      description: "The default class applied to the button.",
      control: { disable: true },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "mds-button" }
      }
    },
    modifiers: {
      description: "Select a modifier (variant) class.",
      table: {
        type: { summary: "string" }
      },
      control: { type: "select", options: ["mds-button--outline"] }
    },
    icon: {
      description: "Select an icon to include in the button.",
      defaultValue: null,
      control: {
        type: "select",
        options: [null, "cloud-download-sharp", "heart-sharp"]
      },
      table: {
        type: { summary: "string" }
      }
    }
  }
};

const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return button({ ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Example Text"
};

// Could import specific JS etc here.
// E.g.
// import './button.js';
// export const Button = () =>
//   button({
//     label: "I'm a <button>",
//     extraClasses: [],
//     icon: ""
//   });

// TODO: figure out how to generate better docs...
// don't want the stories source, but the Twig source or,
// ideally the rendered html - DONE SON!.

// TODO: figure out how to configure postcss and Tailwind. And
// build at the right/same time as SB.
// Guessing thats gonna be part of SB watch directives.

// TODO: create small Twig demo site to consume MDS and CSS/fonts
// but particularly Twig templates.

// Crushed it! Got this working well! Now to integrate w/
// PurgeCSS/TW and then merge w/ actuall mcgill_ds!
// Come up w/ Test plan w/ SB in mind as well!
