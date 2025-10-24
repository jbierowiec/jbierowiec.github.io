from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime
import csv
import os

app = Flask(__name__)
app.secret_key = "change-this-in-production"

# ---- SAMPLE DATA (edit freely) ----
PROJECTS = [
    {
        "title": "Autonomous Object-Tracking Robot",
        "description": (
            "A ROS-powered turtle robot that tracks and follows colored boxes using Python-based "
            "object recognition and mapping algorithms for sequential navigation and collision avoidance."
        ),
        "tech": ["ROS", "Python", "OpenCV", "Simulation", "Object Tracking"],
        "image": "img/projects/object_tracking_robot.jpg"
    },
    {
        "title": "Dual-Axis Solar Tracker",
        "description": (
            "An Arduino-controlled solar tracker using servo motors and light sensors to dynamically adjust "
            "panel orientation. Designed and modeled mechanical components in CAD, improving solar efficiency "
            "through automated tracking."
        ),
        "tech": ["Arduino", "C++", "Servo Motors", "Sensors", "SolidWorks"],
        "image": "img/projects/solar_tracker.jpg"
    },
    {
        "title": "Electromagnetic Field Visualizer",
        "description": (
            "A C++-based GUI simulator modeling electric field vectors and voltage distributions "
            "based on charge placement. Converted to WebAssembly and integrated with JavaScript "
            "for real-time, interactive visualization directly in the browser."
        ),
        "tech": ["C++", "WebAssembly", "JavaScript", "HTML/CSS", "GUI", "Physics Simulation"],
        "image": "img/projects/emfield.jpg"
    }
]


CURRENT_WORK = [
    {
        "title": "I2C Bitbang Project (TinkerCAD)",
        "description": (
            "Simulated I2C communication using PCF8574 I/O expander and Arduino Uno in TinkerCAD. "
            "Implemented bit-banging logic to control 4 LEDs and read 4 buttons without using the Wire library."
        ),
        "tech": ["Arduino", "C++", "I2C", "TinkerCAD", "PCF8574"],
        "image": "img/projects/i2c_bitbang.jpg"
    },
    {
        "title": "FusionBoy 3D Modeling & Prototyping",
        "description": (
            "Freelance 3D modeling service delivering CAD designs and physical prototypes for "
            "engineering and architectural applications. Created assemblies and parts using "
            "Fusion 360, SolidWorks, and Revit; optimized designs for manufacturability and durability."
        ),
        "tech": ["Fusion 360", "SolidWorks", "AutoCAD", "Revit", "3D Printing"],
        "image": "img/projects/fusionboy.jpg"
    },
    {
        "title": "3D-Metal Printed Chess Set",
        "image": "img/projects/chess_set.jpg",
        "description": (
            "Custom chess set designed in Fusion 360 and precision-milled using a HAAS CNC metal machine. "
            "Each piece optimized for weight balance, tool-path efficiency, and post-processing polish to "
            "demonstrate hybrid CAD-to-manufacturing workflow."
        ),
        "tech": ["Fusion 360", "HAAS CNC", "Metal 3D Printing", "CAM Toolpathing", "Manufacturing Design"]
    },
    {
        "title": "Bike Ringer PCB + 3D-Printed Enclosure",
        "image": "img/projects/bike_ringer.jpg",
        "description": (
            "Custom PCB-based bicycle ringer integrating an LED headlight and a buzzer circuit to emit light "
            "and sound simultaneously. Designed the PCB layout and 3D-printed an ergonomic enclosure using "
            "PLA plastic for handlebar mounting and weather resistance."
        ),
        "tech": ["PCB Design", "Arduino", "3D Printing", "Embedded Systems", "Circuit Design"]
    },
]

SKILLS = [
    {"name": "AutoCAD",        "slug": "autocad"},
    {"name": "Autodesk Revit", "slug": "autodeskrevit"},
    {"name": "Tinkercad",      "slug": "tinkercad"},
    {"name": "SolidWorks",      "slug": "dassaultsystemes"},    
    {"name": "ROS",            "slug": "ros"},
    {"name": "Arduino",        "slug": "arduino"},
    {"name": "Raspberry Pi",   "slug": "raspberrypi"},
    {"name": "C",              "slug": "c"},
]

# ---- ROUTES ----
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html",
                           projects=PROJECTS,
                           current_work=CURRENT_WORK,
                           skills=SKILLS)

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    message = request.form.get("message", "").strip()

    if not name or not email or not message:
        flash("Please fill in all fields.", "error")
        return redirect(url_for("index") + "#contact")

    # Save to a local CSV (simple demo storage)
    os.makedirs("data", exist_ok=True)
    with open("data/contact_messages.csv", "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([datetime.utcnow().isoformat(), name, email, message])

    flash("Thanks! I’ll get back to you soon.", "success")
    return redirect(url_for("index") + "#contact")

if __name__ == "__main__":
    app.run(debug=True)
