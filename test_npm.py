import subprocess
print("Starting...")
try:
    result = subprocess.run(["npm.cmd", "install"], cwd="c:/Users/HP/Downloads/Antigravity/Exo Planet Detection/exoplanet_project/frontend", capture_output=True, text=True)
    with open("c:/Users/HP/Downloads/Antigravity/Exo Planet Detection/exoplanet_project/frontend/npm_debug.log", "w", encoding="utf-8") as f:
        f.write("STDOUT:\n")
        f.write(result.stdout)
        f.write("\nSTDERR:\n")
        f.write(result.stderr)
        f.write("\nRETURN CODE: " + str(result.returncode))
except Exception as e:
    with open("c:/Users/HP/Downloads/Antigravity/Exo Planet Detection/exoplanet_project/frontend/npm_debug.log", "w", encoding="utf-8") as f:
        f.write("ERROR:\n" + str(e))
print("Done.")
