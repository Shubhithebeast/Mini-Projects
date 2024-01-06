import speech_recognition as sr

# Initialize the recognizer
recognizer = sr.Recognizer()

# Load the video file
video_file = "./"

# Extract audio from the video
with sr.AudioFile(video_file) as source:
    audio_data = recognizer.record(source)

# Convert audio to text
text = recognizer.recognize_google(audio_data)

# Print the transcribed text
print(text)
