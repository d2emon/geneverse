from flask import request, jsonify

from ..app import app

from space import Multiverse, Universe, Supercluster, Galaxy, Star


@app.route('/api/v1.0/multiverse', methods=['GET'])
@app.route('/api/v1.0/multiverse-<id>', methods=['GET'])
def get_multiverse(id=None):
    multiverse = Multiverse(id)
    return jsonify({
        'multiverse': multiverse.as_dict(),
        'universes': [universe.as_dict() for universe in multiverse.universes]
    })


@app.route('/api/v1.0/universe', methods=['GET'])
@app.route('/api/v1.0/universe-<id>', methods=['GET'])
def get_universe(id=None):
    universe = Universe(id)
    return jsonify({
        'universe': universe.as_dict(),
        'clusters': [cluster.as_dict() for cluster in universe.clusters]
    })


@app.route('/api/v1.0/cluster', methods=['GET'])
@app.route('/api/v1.0/cluster-<id>', methods=['GET'])
def get_cluster(id=None):
    cluster = Supercluster(id)
    return jsonify({'cluster': cluster.as_dict()})


@app.route('/api/v1.0/galaxy', methods=['GET'])
@app.route('/api/v1.0/galaxy-<id>', methods=['GET'])
def get_galaxy(id=None):
    galaxy = Galaxy(id)
    return jsonify({'galaxy': galaxy.as_dict()})


@app.route('/api/v1.0/nebula', methods=['GET'])
@app.route('/api/v1.0/nebula-<id>', methods=['GET'])
def get_nebula(id=None):
    cluster = Supercluster(id)
    return jsonify({'cluster': cluster.as_dict()})


@app.route('/api/v1.0/stars', methods=['GET'])
def get_stars():
    count = int(request.args.get('count', 200))
    return jsonify({
        'stars': [Star().as_dict() for i in range(count)],
    })
