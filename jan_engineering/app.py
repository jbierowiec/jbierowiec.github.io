from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime
import csv
import os

app = Flask(__name__)
app.secret_key = "change-this-in-production"

# ---- SAMPLE DATA (edit freely) ----
PROJECTS = [
    {
        "title": "Control System Simulator",
        "image": "img/placeholder_project.jpg",
        "description": "PID and state-space playground with step response and root locus.",
        "tech": ["C++", "Qt", "Matplotlib", "WASM"]
    },
    {
        "title": "GPX Elevation Visualizer",
        "image": "img/placeholder_project.jpg",
        "description": "Upload GPX → dynamic charts, gradients, and segment analytics.",
        "tech": ["Python", "Flask", "D3.js"]
    },
    {
        "title": "Sudoku Web App",
        "image": "img/placeholder_project.jpg",
        "description": "Name-based personalization, timer, leaderboard, and rewards.",
        "tech": ["React", "Firebase", "Bootstrap"]
    }
]

CURRENT_WORK = [
    {
        "title": "CAD: Bike Telemetry Enclosure",
        "image": "img/placeholder_work.jpg",
        "description": "Fusion 360 case with gasket channel and PCB standoffs.",
        "tech": ["Fusion 360", "3D Printing", "PCB"]
    },
    {
        "title": "Robot Arm End-Effector",
        "image": "img/placeholder_work.jpg",
        "description": "Lightweight aluminum claw with servo mount and cable routing.",
        "tech": ["Revit", "AutoCAD", "ROS"]
    }
]

SKILLS = [
    {"name": "Autodesk Revit", "slug": "autodeskrevit"},
    {"name": "Tinkercad",      "slug": "tinkercad"},
    {"name": "AutoCAD",        "slug": "autocad"},
    {"name": "Fusion 360",     "slug": "autodeskfusion360"},
    {"name": "ROS",            "slug": "ros"},
    {"name": "Arduino",        "slug": "arduino"},
    {"name": "Raspberry Pi",   "slug": "raspberrypi"},
    {"name": "C (Embedded)",   "slug": "c"},
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
