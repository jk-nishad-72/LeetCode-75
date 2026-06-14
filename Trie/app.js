//*208. Implement Trie (Prefix Tree)

class TrieNode {
    constructor() {
        this.children = {};  // stores child nodes
        this.isEnd = false;  // marks end of word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEnd = true;
    }

    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }

        return node.isEnd;
    }

    startsWith(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }

        return true;
    }
}


let trie = new Trie();

trie.insert("apple");

console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true

trie.insert("app");
console.log(trie.search("app"));     // true