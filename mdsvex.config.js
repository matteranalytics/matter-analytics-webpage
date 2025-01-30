import { visit } from "unist-util-visit";
import { formatDate } from "./src/utils.js";

function remarkDateFormatter() {
    return function transformer(tree) {
        visit(tree, "paragraph", (node) => {
            if (!node.children || node.children.length === 0) {
                return;
            }

            node.children.forEach((child) => {
                if (child.type !== "text") {
                    return;
                }
                const dateRegex = /(\d{4}(?:-\d{2}(?:-\d{2})?)?)/;
                const match = child.value.match(dateRegex);

                if (match) {
                    const originalDate = match[1];
                    const formattedDate = formatDate(originalDate);
                    child.value = child.value.replace(originalDate, formattedDate);
                }
            });
        });
    };
}

const config = {
    extensions: [".md", ".svx"],

    smartypants: {
        quotes: true,
        ellipses: true,
    },

    remarkPlugins: [remarkDateFormatter],
    rehypePlugins: [],
};

export default config;
