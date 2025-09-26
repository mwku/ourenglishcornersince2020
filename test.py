import flask
from flask import Flask, jsonify, render_template
import json

app = Flask(__name__)

@app.route('/')
def test():
    return render_template('test.html')

@app.route('/data.json')
def get_data():
    with open('data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)