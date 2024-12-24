---
title: Example Blog Post
description: This is an example blog post.
date: 2024-12-19
lastModified: 2024-12-22
category: Example
tags:
  - React
  - TypeScript
  - Next.js
lang: en
---

This is an example blog post. You can write anything you want here. You can use Markdown syntax to format your text. This post will demonstrate various Markdown features and include a TypeScript code example.

### What is Markdown?

Markdown is a lightweight markup language with plain text formatting syntax. It is designed to be easily readable and writable. Many platforms, like GitHub, use Markdown for documentation and communication.

### Basic Markdown Syntax

*   **Bold**: `**bold text**` or `__bold text__`
*   *Italics*: `*italicized text*` or `_italicized text_`
*   **_Bold and Italics_**: `**_bold and italicized text_**`
*   Lists:
    *   Unordered List:
        *   Item 1
        *   Item 2
    *   Ordered List:
        1.  First item
        2.  Second item
*   Links: `[Link text](URL)` (e.g., `[Google](https://www.google.com)`)
*   Images: `![Alt text](image URL)`
*   Headers: `# Heading 1`, `## Heading 2`, `### Heading 3`, etc.

### Code Block (Using Backticks within `<pre>` and `<code>` tags)

Including code within backticks sometimes causes issues with large language models. A more robust way to display code blocks is to use HTML's `<pre>` and `<code>` tags. This ensures consistent rendering across different platforms.

```tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data.slice(0, 5)); // Limit to 5 users for this example
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

This method provides better control over how the code is displayed and avoids potential parsing problems. The `language-tsx` class within the `<code>` tag helps with syntax highlighting if your Markdown renderer supports it.

### More Markdown Examples

You can also use:

*   Horizontal rules: `---` or `***`
*   Blockquotes: `> This is a blockquote.`

> This is a blockquote.

This example covers a range of common Markdown uses and a reliable method for embedding code blocks. Remember to check your specific Markdown renderer's documentation for full support of these features.
