# Arabic Readability Scorer

A modern web-based tool for evaluating Arabic text readability using the **Al-Heeti Fog Index** standard. This tool helps content creators, educators, and writers assess how easy or difficult their Arabic text is to read.

## 🌟 Features

- **Real-time Analysis**: Instant readability scoring as you type
- **Al-Heeti Fog Index**: Industry-standard Arabic readability measurement
- **Visual Feedback**: Color-coded difficulty levels with gauge visualization
- **Detailed Statistics**: Comprehensive breakdown of sentences, words, and complexity
- **Bilingual Interface**: Arabic-first design with English translations
- **Keyboard Shortcuts**: Press `Ctrl+Enter` to evaluate text quickly
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📊 How It Works

The tool implements the **Al-Heeti Fog Index** formula, which is specifically designed for Arabic text readability:

```
Fog Index = 0.4 × (ASL + PCW)
```

Where:
- **ASL** (Average Sentence Length) = Total Words ÷ Total Sentences
- **PCW** (Percent Complex Words) = (Complex Words ÷ Total Words) × 100
- **Complex Words** = Words with 5 or more letters (Al-Heeti standard)

### Readability Levels

| Score Range | Level | Description |
|-------------|-------|-------------|
| 0 - 6 | Very Easy | Clear and easy to read. Suitable for all levels. |
| 6 - 9 | Standard | Appropriate for general reading. |
| 9 - 12 | Moderate | Requires intermediate education level. |
| 12 - 16 | Difficult | Specialized text requiring academic background. |
| 16+ | Very Difficult | Highly complex. Consider simplification. |

## 🚀 Getting Started

### Prerequisites

No installation required! This is a standalone web application that runs entirely in your browser.

### Usage

1. **Open the Application**
   - Simply open `index.html` in any modern web browser
   - Or host it on any web server

2. **Enter Arabic Text**
   - Type or paste your Arabic text into the text area
   - The character and word count updates in real-time

3. **Evaluate**
   - Click the "تقييم قابلية القراءة" button
   - Or press `Ctrl+Enter` (or `Cmd+Enter` on Mac)

4. **Review Results**
   - View your Fog Index score
   - Check the difficulty level classification
   - Examine detailed statistics (sentences, words, complex words, ASL)
   - See the visual gauge showing where your text falls on the readability scale

## 📁 Project Structure

```
arabic-readability-scorer/
├── index.html          # Main HTML structure
├── style.css           # All styling and design
├── script.js           # Core logic and calculations
├── main.py             # Python implementation (reference)
└── README.md           # This file
```

## 🔧 Technical Details

### Algorithm Implementation

The JavaScript implementation mirrors the Python version (`main.py`) with the following steps:

1. **Sentence Splitting**: Text is split using Arabic and English punctuation markers: `.،؛؟!?\n`
2. **Word Extraction**: Words are extracted and cleaned of non-alphabetic characters
3. **Complex Word Detection**: Words with ≥5 letters are classified as complex
4. **Calculation**: ASL and PCW are computed, then combined using the 0.4 multiplier

### Technologies Used

- **HTML5**: Semantic structure with RTL support
- **CSS3**: Modern styling with CSS variables and gradients
- **Vanilla JavaScript**: No dependencies or frameworks required
- **IBM Plex Sans Arabic**: Professional Arabic typography via Google Fonts

### Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6 support

## 🎨 Design Features

- **Dark Theme**: Modern dark UI optimized for readability
- **RTL Layout**: Proper right-to-left text direction for Arabic
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Animations**: Polished transitions and interactions
- **Color-Coded Levels**: Visual indicators for difficulty (green/amber/red)

## 📖 Example Use Cases

- **Content Writers**: Ensure articles match target audience reading level
- **Educators**: Assess textbook and material complexity
- **Translators**: Verify translation maintains appropriate difficulty
- **Editors**: Optimize content for better accessibility
- **Researchers**: Analyze text complexity in Arabic documents

## 🔬 Scientific Background

The Al-Heeti Fog Index is based on the Gunning Fog Index adapted for Arabic language characteristics. It considers:

- Arabic sentence structure patterns
- Letter-based complexity (5+ letters threshold)
- Standard Arabic punctuation conventions

## 👨‍💻 Developer

**Mario Ashraf**

## 📝 License

This project is open source and available for educational and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

- Report bugs
- Suggest new features
- Improve documentation
- Enhance the algorithm

## 📚 References

- Al-Heeti, N. (1984). "Readability of Arabic Text"
- Gunning Fog Index methodology
- Arabic NLP best practices

---

**Note**: For the Python implementation, see `main.py`. Both implementations produce identical results.
