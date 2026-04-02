import os
import sys

print("Installing tf2onnx...")
ret = os.system(f"{sys.executable} -m pip install tf2onnx")
if ret != 0:
    print("Failed to install tf2onnx")
    sys.exit(1)

print("Converting to ONNX...")
ret = os.system(f"{sys.executable} -m tf2onnx.convert --keras cnn_model.h5 --output frontend/public/model.onnx")
if ret != 0:
    print("Conversion failed")
    sys.exit(1)

print("Conversion SUCCESS!")
