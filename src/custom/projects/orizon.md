![Main project dashboard |full](/images/project-2.png)
![Main project dashboard](/images/project-2.png)

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

Emphasis, aka italics, with *asterisks* or *underscores*.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and *underscores***.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
    - Unordered sub-list indented with 4 spaces
    - Unordered sub-list indented with 4 spaces
3. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list indented with 4 spaces
    2. Ordered sub-list indented with 4 spaces
4. And another item.

  You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use two here to also align the raw Markdown).

  To have a line break without a paragraph, you will need to use two trailing spaces.
  Note that this line is separate, but within the same paragraph. ❗Unfortunately this DOES NOT RENDERED PROPERLY!
  (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)
5. And another item.

- Unordered list can use asterisks *
  - Or minuses -
  - Or pluses +
- Unordered list can use asterisks *
  - Or minuses -
  - Or pluses +

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

I'm a relative reference to a repository file ❗ No, in our case it will be an error during build.

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
<http://www.example.com> or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Codeblocks

Inline `code` has `back-ticks around` it.

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

## Footnotes

Not supported.

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

## Inline HTML

Not supported.

## Horizontal Rule

---

## Line breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*. ❗Again, not rendered properly.
