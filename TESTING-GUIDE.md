# Valentine's Week 2026 - Testing Guide 🌹

## ✅ Complete Features Checklist

### Core Features Implemented:
- ✅ **Date-Locked System**: Days only appear when their date arrives
- ✅ **Sequential Unlocking**: Must answer previous day's question first
- ✅ **8 Valentine Days**: Feb 7-14, 2026
- ✅ **Questions & Validation**: Exact date/text validation
- ✅ **LocalStorage Persistence**: Progress saved forever
- ✅ **Hiding Locked Days**: Future days completely hidden
- ✅ **Navigation**: Shows only unlocked days
- ✅ **Name Cycling**: Vampire → Khushi → Shrishti (every 2 seconds)
- ✅ **Love Notes**: 48 messages with floating envelopes
- ✅ **Final Valentine's Message**: Custom reveal on Feb 14
- ✅ **Music Toggle**: Mute/unmute button (ready for audio file)
- ✅ **Falling Petals**: Beautiful background animation
- ✅ **Romantic Theme**: Dark + rose-red + soft pink
- ✅ **Mobile-First**: Fully responsive design

---

## 🧪 How to Test

### 1. **Current State** (Today: Feb 6, 2026)
Since Valentine's Week starts Feb 7, the website will show:
- Welcome message with names cycling
- NO day cards visible yet (because no days are available)
- Floating envelopes (click them!)
- Music toggle button (top right)

### 2. **Enable Test Mode** (See All Days Now)
Currently **TEST_MODE is ON** in `/src/lib/valentineData.ts` line 152:
```typescript
const TEST_MODE = true; // All days available for testing
```

With test mode ON, you'll see:
- All 8 day cards immediately
- Only Rose Day is clickable (first day)
- Other days show "Answer previous question first"

### 3. **Test the Unlock Flow**

#### Rose Day (Day 1):
1. Click the Rose Day card 🌹
2. Modal opens with question: "When did I propose you to marry me?"
3. **Correct Answer**: December 29, 2024
4. Click Submit → Success animation → Propose Day unlocks

#### Propose Day (Day 2):
1. Click Propose Day card 💍
2. Question: "Our scooty ride in Lucknow?"
3. **Correct Answer**: August 19, 2021
4. Continue...

#### All Correct Answers:
1. Rose Day: `December 29, 2024`
2. Propose Day: `August 19, 2021`
3. Chocolate Day: `January 16, 2025`
4. Teddy Day: `January 22, 2026`
5. Promise Day: `February 4, 2026`
6. Hug Day: `June 25, 2025`
7. Kiss Day: `bracelet` (text answer)
8. Valentine's Day: `May 27, 2025`

### 4. **Test Interactive Features**

#### Love Notes (Floating Envelopes):
- Click any envelope 💌 or butterfly on the screen
- Random message appears from 48 messages
- Messages change each time you click
- Close modal and click another envelope

#### Music Toggle:
- Click 🎵 button (top right)
- Currently no audio file (but toggle works)
- To add music: Place `romantic-music.mp3` in `/public/` folder
- Update `/src/components/MusicToggle.tsx` line 47

#### Name Cycling:
- Watch the header: "For My Dearest {name}"
- Changes every 2 seconds: Vampire → Khushi → Shrishti

#### Navigation:
- As you unlock days, they appear in navigation bar
- Click nav button to scroll to that day card
- Only shows unlocked days

### 5. **Test Valentine's Day Finale**

After unlocking all 8 days:
1. A final rose card appears at bottom
2. Shows the message:
   ```
   Happy Valentine's Day
   
   Happy Valentine's Day, Vampire.
   Or Khushi.
   Or Shrishti.
   Or just… mine. 💕
   ```
3. Animated hearts and sparkles
4. Rose grows animation

---

## 🔧 Testing Commands

### Reset All Progress:
Open browser console (F12) and run:
```javascript
localStorage.clear();
location.reload();
```

### Unlock All Days (Cheat):
```javascript
localStorage.setItem('valentine_unlocked_days', JSON.stringify([1,2,3,4,5,6,7,8,9]));
localStorage.setItem('valentine_completed', 'true');
location.reload();
```

### Check Current Progress:
```javascript
console.log(JSON.parse(localStorage.getItem('valentine_unlocked_days')));
```

---

## 🎬 Production Mode

### Before Going Live:

1. **Disable Test Mode** in `/src/lib/valentineData.ts`:
   ```typescript
   const TEST_MODE = false; // Real date checking
   ```

2. **Add Romantic Music** (Optional):
   - Add `romantic-music.mp3` to `/public/` folder
   - Uncomment line in `/src/components/MusicToggle.tsx`

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📱 Testing on Mobile

1. Get your local IP from terminal (shown when dev server starts)
2. Access from phone: `http://192.168.1.7:8080` (use your IP)
3. Test touch interactions
4. Test love note modals
5. Test date picker on mobile

---

## 🐛 Known Issues & Notes

1. **CSS Import Warning**: Fixed (moved @import to top of CSS file)
2. **Music Autoplay**: Browsers block autoplay - user must click toggle first
3. **Date Picker**: Uses native browser date picker (looks different on each device)
4. **Test Mode**: Remember to disable before going live!

---

## 📊 What's Being Tested

### ✅ Must Test:
- [ ] Each day unlocks correctly with right answer
- [ ] Wrong answers show error messages
- [ ] Days stay unlocked after refresh
- [ ] Navigation appears as days unlock
- [ ] Love notes show different messages
- [ ] Names cycle in header
- [ ] Final rose appears after day 8
- [ ] Mobile responsiveness
- [ ] Music toggle works
- [ ] Can reset with localStorage.clear()

### ✅ Edge Cases:
- [ ] Try wrong date formats
- [ ] Try wrong text (case variations)
- [ ] Refresh mid-answer
- [ ] Open on Feb 7 (real date test)
- [ ] Test with slow internet
- [ ] Test on different browsers

---

## 🎯 Current Testing Status

**You are here:** Testing with TEST_MODE enabled

**Next:** Go through all 8 days and test unlock flow

**Server running at:** http://localhost:8080

---

## 💡 Tips

1. **Quick Testing**: Keep browser console open to run reset commands
2. **Multiple Tests**: Use incognito/private window for clean testing
3. **Mobile Testing**: Use browser dev tools mobile emulator
4. **Screenshots**: Take screenshots of each day for memories!

---

## 🚀 Ready to Launch?

Before sharing with your special someone:
1. Set `TEST_MODE = false`
2. Test on real dates (Feb 7-14)
3. Add music file (optional)
4. Build for production
5. Deploy to web host
6. Share the link on Feb 6 evening! 💕

---

**Happy Testing!** 🌹💕
