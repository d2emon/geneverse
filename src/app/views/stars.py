import random

from flask import request, jsonify

from ..app import app

from stars import Multiverse, Star


@app.route('/api/v1.0/multiverse', methods=['GET'])
@app.route('/api/v1.0/multiverse-<id>', methods=['GET'])
def get_multiverse(id=None):
    multiverse = Multiverse(id)
    return jsonify({ 'multiverse': multiverse.as_dict() })


@app.route('/api/v1.0/stars', methods=['GET'])
def get_stars():
    count = int(request.args.get('count', 200))
    return jsonify({
        'stars': [Star().as_dict() for i in range(count)],
    })
