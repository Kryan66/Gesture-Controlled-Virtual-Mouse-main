# Gesture Controlled Virtual Mouse — Quick Guide (macOS)

Gesture Controlled Virtual Mouse lets you control your computer with hand gestures and voice commands. Features include cursor movement, clicks, drag & drop, scrolling, volume/brightness control, and a voice assistant (Proton) for launching/stopping gestures, Google search, file navigation, clipboard operations, date/time queries, and exit commands.

---

Features
- Move Cursor using hand tracking
- Left Click, Right Click, Double Click
- Drag and Drop files or objects
- Vertical and Horizontal Scrolling with pinch gestures
- Volume Control and Brightness Control with dynamic pinch
- Voice commands for:
  - Launching/Stopping gesture recognition
  - Google searches
  - Google Maps locations
  - Listing and opening files
  - Clipboard operations (copy/paste)
  - Checking date and time
  - Sleeping/Waking the assistant
  - Exiting the assistant

---

Setup Steps (macOS)

1) Create a Python 3.8.5 environment:
conda create --name gest python=3.8.5

2) Activate the environment:
conda activate gest

3) Install dependencies:
pip install -r requirements.txt

4) Install PyAudio (on macOS you may need portaudio first):
brew install portaudio
pip install pyaudio

(Note: pywin32 is Windows-only and can be skipped on macOS.)

5) Navigate to the src folder in your project directory:
cd path/to/Gesture-Controlled-Virtual-Mouse/src

6) To run voice assistant with gesture control, start Proton:
python Proton.py

Then enable gestures by saying:
"Proton Launch Gesture Recognition"

7) To run gesture control only without the voice assistant:
- Uncomment the last two lines in Gesture_Controller.py
- Run:
python Gesture_Controller.py

---

Requirements
- macOS with webcam and microphone
- Python 3.6–3.8.5
- Homebrew (for installing portaudio if needed)

Notes
- Some Windows-specific features (e.g., pywin32-based file navigation) will not work on macOS.
- Voice commands and gesture tracking will function normally.

