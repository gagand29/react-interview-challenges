import { useMemo, useState } from "react";

// 🔠 Small dataset
const items = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Blackberry', 'Cherry', 'Coconut', 'Mango'];

// 🌳 --- Trie Implementation ---
class TrieNode {
  children: Record<string, TrieNode> = {};
  isEndOfWord = false;
}

class Trie {
  root = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  searchPrefix(prefix: string): string[] {
    let node = this.root;
    for (const char of prefix.toLowerCase()) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return this.collectAllWords(node, prefix.toLowerCase());
  }

  private collectAllWords(node: TrieNode, prefix: string): string[] {
    let words: string[] = [];

    if (node.isEndOfWord) words.push(prefix);

    for (const char in node.children) {
      words = words.concat(this.collectAllWords(node.children[char], prefix + char));
    }

    return words;
  }
}

// ✨ AdvancedSearchList Component
export default function AdvancedSearchList() {
  const [query, setQuery] = useState("");

  // Build the trie only once
  const trie = useMemo(() => {
    const t = new Trie();
    items.forEach(item => t.insert(item));
    return t;
  }, []);

  // Get matched items using trie prefix search
  const filteredItems = query ? trie.searchPrefix(query) : items;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Advanced Trie Search</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search (e.g. Ap)"
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => <li key={item}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
}
