from flask import url_for, jsonify

from ..app import app

from d2data import generate_thing, thing_meta, list_generators


def make_public_generator(gen):
    res = gen
    res['uri'] = url_for('get_generated', gen=res['name'].replace(' ', '_'), _external=True)
    return res


def make_public_item(item):
    res = item
    for child in res.get("children", dict()):
        child['uri'] = url_for('get_generated', gen=child['generator'].replace(' ', '_'), _external=True)
    return res


@app.route('/api/v1.0/list', methods=['GET'])
def get_generators():
    return jsonify({
        'generators': [make_public_generator(g) for g in list_generators()],
    })


@app.route('/api/v1.0/generate/<gen>', methods=['GET'])
def get_generated(gen):
    gen = gen.replace('_', ' ')
    return jsonify({
        'generator': gen,
        'result': make_public_item(generate_thing(gen)),
    })


@app.route('/api/v1.0/meta/<gen>', methods=['GET'])
def get_meta(gen):
    gen = gen.replace('_', ' ')
    return jsonify({
        'meta': thing_meta(gen),
    })
