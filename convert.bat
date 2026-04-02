@echo off
pip install tensorflowjs
tensorflowjs_converter --input_format keras --quantize_uint8 cnn_model.h5 frontend/public/model
echo CONVERSION COMPLETE > conversion_done.txt
