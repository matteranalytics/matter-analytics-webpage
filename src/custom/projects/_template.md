![Appealing Markdown logo |full](/images/_template.png)
![Appealing Markdown logo](/images/_template.png)

The first image occupies the container's full width, responsively adjusting its size.

The second image retains its original size on larger screens and responsively shrinks on smaller screens.

## Heading

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Emphasis

Emphasis, aka italics, with *one asterisk*.

Strong emphasis, aka bold, with **two asterisks**.

Combined emphasis with ***three asterisks***.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
    - Unordered sub-list indented with 4 spaces
    - Unordered sub-list indented with 4 spaces
1. Actual numbers don't matter, just that it's a number, but the Markdown Linter will warn you in this case. To avoid the warning be consistent:
    1. Use either consecutive numbers, or
    2. Use just 1. for every item at the same level
4. And another item.

  You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use two here to also align the raw Markdown).

  To have a line break just use an empty line, and indent the new paragraph with two spaces.
5. And another item.

- Unordered list
  - Item
  - Item
- And another one right after the previous one without a line break
  - Item
  - Item

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs in angle brackets will automatically get turned into links.
<http://www.example.com>

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Here's the Markdown logo (hover to see the title text):

Inline-style:
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/80px-Markdown-mark.svg.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

Relative reference to the `static/` folder (without using the `static` prefix to safe space if you have a nested folder structure):
![Template Project](/images/_template.png)

[logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/80px-Markdown-mark.svg.png "Logo Title Text 2"

## Codeblocks

Inline `code` has `back-ticks around` it.

Fenced codeblocks:

```sql
--
SELECT product_group, count(*) AS cnt
FROM   sales
WHERE  region = 'west'  -- additional restrictions are possible but not necessary
GROUP  BY product_group -- 'product_group' is the criterion which creates groups
HAVING COUNT(*) > 1000  -- restriction to groups with more than 1000 sales per group
ORDER  BY cnt;

-- Attention: in the next example, col_2 is not part of the GROUP BY criterion. Therefore it cannot be displayed.
SELECT col_1, col_2
FROM   t1
GROUP  BY col_1;

-- We must accumulate all col_2-values of each group to ONE value, eg:
SELECT col_1, sum(col_2), min(col_2)
FROM   t1
GROUP  BY col_1;
```

```python
import numpy
import matplotlib.pyplot as plt
numpy.random.seed(2)

x = numpy.random.normal(3, 1, 100)
y = numpy.random.normal(150, 40, 100) / x

plt.scatter(x, y)
plt.show()
```

```
No language indicated, so no syntax highlighting.
But we want to create a codeblock, just for fun.
```

## Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less      | Pretty
---      | ---       | ---
*Still*  | `renders` | **nicely**
1        | 2         | 3

## Blockqoutes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Horizontal Rule

---

## Line breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.
