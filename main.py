import re

def calculate_arabic_fog_index(text: str) -> float:
    # 1. Split sentences using common Arabic and English punctuation markers
    sentences = [s for s in re.split(r'[.،؛؟!?\n]', text) if s.strip()]
    total_sentences = max(len(sentences), 1) # Prevent division by zero
   
    # 2. Extract and clean individual words (removing non-alphabetic noise)
    words = [re.sub(r'[^\w]', '', w) for w in text.split()]
    words = [w for w in words if w]  # Filter out empty strings
    total_words = max(len(words), 1) # Prevent division by zero
   
    # 3. Al-Heeti standard defines "complex words" in Arabic as having 5 or more letters
    complex_words = [w for w in words if len(w) >= 5]
    total_complex_words = len(complex_words)
   
    # 4. Calculate Average Sentence Length (ASL) and Percent of Complex Words (PCW)
    asl = total_words / total_sentences
    pcw = (total_complex_words / total_words) * 100
   
    # 5. Apply the standard Fog Index weighting multiplier
    fog_index = 0.4 * (asl + pcw)
   
    return round(fog_index, 1)

# --- Test Example ---
arabic_document = """
أدخل نصاً عربياً طويلاً هنا. يحتوي هذا النص على جمل معقدة وكلمات تتكون من حروف كثيرة لتحقيق النتيجة المطلوبة.
"""

score = calculate_arabic_fog_index(arabic_document)
print(f"Arabic Fog Index (Grade Level): {score}")