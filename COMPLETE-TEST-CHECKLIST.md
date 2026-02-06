# Valentine's Week 2026 - Complete Testing Checklist ✅

## 🧪 Full Flow Testing

### Pre-Test Setup
- [ ] Browser open at: http://localhost:8080
- [ ] Console open (F12) for debugging if needed
- [ ] Fresh start: Run `localStorage.clear(); location.reload();` in console

---

## Day-by-Day Testing

### 🌹 Day 1: Rose Day (February 7)
**Question:** "When did I propose you to marry me?"  
**Answer:** December 29, 2024

**Test Steps:**
1. [ ] Rose Day card is visible and clickable
2. [ ] Click Rose Day card → Modal opens
3. [ ] Date picker appears
4. [ ] Select December 29, 2024
5. [ ] Click Submit Answer
6. [ ] Success animation plays
7. [ ] Unlock message appears: "You remembered our special moment, Khushi! 💍"
8. [ ] Romantic paragraph displays in gradient box
9. [ ] Read: "I don't know how lucky I am or how many good deeds I did in my previous life..."
10. [ ] Wait 8 seconds
11. [ ] Modal auto-closes
12. [ ] Propose Day card appears

---

### 💍 Day 2: Propose Day (February 8)
**Question:** "Our scooty ride in Lucknow?"  
**Answer:** August 19, 2021

**Test Steps:**
1. [ ] Propose Day card is now clickable
2. [ ] Click Propose Day card
3. [ ] Select August 19, 2021
4. [ ] Submit answer
5. [ ] Read romantic paragraph about the scooty ride
6. [ ] Wait 8 seconds
7. [ ] Chocolate Day unlocks

---

### 🍫 Day 3: Chocolate Day (February 9)
**Question:** "When did I meet you after coming from Bangalore?"  
**Answer:** January 16, 2025

**Test Steps:**
1. [ ] Click Chocolate Day card
2. [ ] Select January 16, 2025
3. [ ] Submit answer
4. [ ] Read paragraph about distance and home
5. [ ] Wait 8 seconds
6. [ ] Teddy Day unlocks

---

### 🧸 Day 4: Teddy Day (February 10)
**Question:** "When did we go to Bithoor?"  
**Answer:** January 22, 2026

**Test Steps:**
1. [ ] Click Teddy Day card
2. [ ] Select January 22, 2026
3. [ ] Submit answer
4. [ ] Read paragraph about Bithoor memories
5. [ ] Wait 8 seconds
6. [ ] Promise Day unlocks

---

### 🤞 Day 5: Promise Day (February 11)
**Question:** "When did I say that I love you?"  
**Answer:** February 4, 2026

**Test Steps:**
1. [ ] Click Promise Day card
2. [ ] Select February 4, 2026
3. [ ] Submit answer
4. [ ] Read paragraph about "I love you"
5. [ ] Wait 8 seconds
6. [ ] Hug Day unlocks

---

### 🤗 Day 6: Hug Day (February 12)
**Question:** "When did you buy me shoes?"  
**Answer:** June 25, 2025

**Test Steps:**
1. [ ] Click Hug Day card
2. [ ] Select June 25, 2025
3. [ ] Submit answer
4. [ ] Read paragraph about small gestures
5. [ ] Wait 8 seconds
6. [ ] Kiss Day unlocks

---

### 💋 Day 7: Kiss Day (February 13)
**Question:** "What did I bring you from Goa?"  
**Answer:** bracelet (text input)

**Test Steps:**
1. [ ] Click Kiss Day card
2. [ ] **Text input** appears (not date picker)
3. [ ] Type: bracelet
4. [ ] Submit answer
5. [ ] Read paragraph about the Goa bracelet
6. [ ] Wait 8 seconds
7. [ ] Valentine's Day unlocks

---

### ❤️ Day 8: Valentine's Day (February 14) - **THIS IS THE FINAL DAY**
**Question:** "What was the first gift I gave you?"  
**Answer:** May 27, 2025

**Test Steps:**
1. [ ] Click Valentine's Day card
2. [ ] Date picker appears
3. [ ] Select May 27, 2025
4. [ ] Submit answer
5. [ ] Read final romantic paragraph about gifts and her being the greatest gift
6. [ ] Wait 8 seconds
7. [ ] Modal closes
8. [ ] **FINAL ROSE appears at bottom of page!**

---

## 🌹 Final Rose (Appears After Day 8)

**Expected to see:**
- [ ] Large rose emoji 🌹 (animated)
- [ ] Title: "Happy Valentine's Day"
- [ ] Message in stages:
  - "Happy Valentine's Day, Vampire."
  - "Or Khushi."
  - "Or Shrishti."
  - "Or just… mine. 💕"
- [ ] Animated hearts at bottom
- [ ] "Forever Yours ✨"
- [ ] Gold sparkles in corners

---

## 💌 Additional Features to Test

### Floating Envelopes
- [ ] See 2 envelopes at bottom of page
- [ ] Click bottom-left envelope → Love note modal opens
- [ ] Random message appears from 48 messages
- [ ] Close modal
- [ ] Click bottom-right envelope → Different random message
- [ ] Click multiple times → Different messages each time

### Name Cycling (Header)
- [ ] Watch header: "For My Dearest {name}"
- [ ] See "Vampire" (wait 2 seconds)
- [ ] See "Khushi" (wait 2 seconds)
- [ ] See "Shrishti" (wait 2 seconds)
- [ ] Cycles back to "Vampire"

### Music Toggle
- [ ] See 🎵 button in top-right corner
- [ ] Click to toggle (no music file, but button works)
- [ ] Icon changes between Volume2 and VolumeX

### Navigation
- [ ] Navigation bar appears as days unlock
- [ ] Shows only unlocked days
- [ ] Click nav button → Scrolls to that day card
- [ ] Updates as you progress

---

## 🐛 Error Testing

### Wrong Answers
- [ ] Enter wrong date → Error message appears
- [ ] Error: "Hmm, that's not right... Try again, my love! 💭"
- [ ] Can try again
- [ ] Enter correct date → Success

### Text Input (Kiss Day)
- [ ] Type "Bracelet" (capital B) → Should work (case-insensitive)
- [ ] Type "bracelet " (with space) → Should work (trim spaces)
- [ ] Type "bangle" → Error message

---

## 📱 Responsive Testing

### Desktop
- [ ] All cards display in grid (4 columns on large screens)
- [ ] Modal is centered
- [ ] Envelopes visible at bottom

### Tablet
- [ ] Cards display in 2 columns
- [ ] Modal responsive
- [ ] Touch-friendly

### Mobile
- [ ] Cards display in 1 column
- [ ] Date picker is native mobile picker
- [ ] Modal fills screen appropriately
- [ ] Envelopes are tappable

---

## ⚡ Performance Testing

- [ ] Page loads quickly
- [ ] Animations are smooth
- [ ] No lag when opening modals
- [ ] Transitions are fluid
- [ ] Images/emojis load properly

---

## 💾 Persistence Testing

### LocalStorage
1. [ ] Complete first 3 days
2. [ ] Refresh page (F5)
3. [ ] First 3 days still unlocked
4. [ ] Day 4 is now clickable
5. [ ] Progress saved correctly

### Reset Test
1. [ ] Open console (F12)
2. [ ] Run: `localStorage.clear(); location.reload();`
3. [ ] All progress reset
4. [ ] Only Rose Day visible again

---

## 🎯 Complete Flow Summary

**Expected Journey:**
1. Start → See Rose Day only
2. Answer Rose Day → See romantic paragraph (8s) → Propose Day unlocks
3. Continue through all 8 days
4. Each answer reveals a beautiful paragraph
5. After Valentine's Day answer → Final Rose appears
6. Final message: "Happy Valentine's Day, Vampire. Or Khushi. Or Shrishti. Or just… mine. 💕"

---

## ✅ All Features Checklist

- [x] 8 Valentine days with questions
- [x] Date-locked system (TEST_MODE currently ON)
- [x] Sequential unlocking
- [x] Romantic paragraphs after each answer
- [x] 8-second display time
- [x] 2 clickable envelopes
- [x] 48 love note messages
- [x] Name cycling in header
- [x] Music toggle button
- [x] Navigation with unlocked days
- [x] Final Valentine's Day rose
- [x] Mobile responsive
- [x] LocalStorage persistence
- [x] Beautiful animations

---

## 🚀 Ready to Test!

**Start Here:** 
1. Open http://localhost:8080
2. Click Rose Day card
3. Follow the journey! 💕

**Quick Answers Reference:**
1. Dec 29, 2024
2. Aug 19, 2021
3. Jan 16, 2025
4. Jan 22, 2026
5. Feb 4, 2026
6. Jun 25, 2025
7. bracelet
8. May 27, 2025

---

Last Updated: February 6, 2026 - 10:25 PM
