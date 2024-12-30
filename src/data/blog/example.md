---
title: Example Blog Post
description: This is an example blog post.
date: 2024-12-19
---

This is an example blog post. You can write anything you want here. You can use Markdown syntax to format your text.

### Introduction

In this post, we'll explore a basic example of using Rust for a simple task. Rust is a powerful systems programming language known for its performance and safety. We'll demonstrate a function that calculates the factorial of a given number.

### Code Example (Rust)

Here's the Rust code:

```rust
fn factorial(n: u64) -> u64 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn main() {
    let num = 5;
    let result = factorial(num);
    println!("The factorial of {} is {}", num, result);

    let num2 = 0;
    let result2 = factorial(num2);
    println!("The factorial of {} is {}", num2, result2);

    let num3 = 10;
    let result3 = factorial(num3);
    println!("The factorial of {} is {}", num3, result3);
}
```

This code defines a recursive function `factorial` that calculates the factorial of a given unsigned 64-bit integer (`u64`). The `main` function then calls this function with a sample input and prints the result.

### Explanation

*   The `fn factorial(n: u64) -> u64` line defines a function named `factorial` that takes an unsigned 64-bit integer `
