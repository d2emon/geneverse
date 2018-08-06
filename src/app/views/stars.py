import random

from flask import request, jsonify

from ..app import app

from stars import Multiverse, Universe, Supercluster, Star


@app.route('/api/v1.0/multiverse', methods=['GET'])
@app.route('/api/v1.0/multiverse-<id>', methods=['GET'])
def get_multiverse(id=None):
    multiverse = Multiverse(id)
    return jsonify({ 'multiverse': multiverse.as_dict() })


# new Thing("universe",["supercluster,10-30"]);
@app.route('/api/v1.0/universe', methods=['GET'])
@app.route('/api/v1.0/universe-<id>', methods=['GET'])
def get_universe(id=None):
    universe = Universe(id)
    return jsonify({'universe': universe.as_dict()})


# new Thing("supercluster",["galaxy,10-30"],"galactic supercluster");
@app.route('/api/v1.0/cluster', methods=['GET'])
@app.route('/api/v1.0/cluster-<id>', methods=['GET'])
def get_cluster(id=None):
    cluster = Supercluster(id)
    return jsonify({'cluster': cluster.as_dict()})


# new Thing("galaxy",["galaxy center","galaxy arm,2-6"]);
# new Thing("galaxy arm",["galactic life,5%","dyson sphere,4%","dyson sphere,2%","star system,20-50","nebula,0-12","black hole,20%","black hole,20%"],"arm");
# new Thing("galaxy center",["black hole","galactic life,10%","dyson sphere,4%","dyson sphere,2%","star system,20-50","nebula,0-12"],"galactic center");
@app.route('/api/v1.0/galaxy', methods=['GET'])
@app.route('/api/v1.0/galaxy-<id>', methods=['GET'])
def get_galaxy(id=None):
    cluster = Supercluster(id)
    return jsonify({'cluster': cluster.as_dict()})


# new Thing("nebula",["galactic life,15%","star,2%","star,2%","star,2%","interstellar cloud,1-6"]);
# new Thing("interstellar cloud",["helium","hydrogen","carbon,80%","water,5%","ammonia,5%","nitrogen,5%","iron,5%","sulfur,5%","oxygen,15%"],[["a bright pink","a faint","a fading","a pale","a fluo","a glowing","a green","a bright green","a dark brown","a brooding","a magenta","a bright red","a dark red","a blueish","a deep blue","a turquoise","a teal","a golden","a multicolored","a silver","a dramatic","a luminous","a colossal","a purple","a gold-trimmed","an opaline","a silvery","a shimmering"],[" "],["interstellar cloud"]]);
@app.route('/api/v1.0/nebula', methods=['GET'])
@app.route('/api/v1.0/nebula-<id>', methods=['GET'])
def get_nebula(id=None):
    cluster = Supercluster(id)
    return jsonify({'cluster': cluster.as_dict()})


# new Thing("star system",["star","star,3%","visitor planet,5%","future planet,10%","future planet,10%","terraformed planet,50%","terraformed planet,20%","terraformed planet,10%","medieval planet,30%","medieval planet,20%","ancient planet,50%","ancient planet,30%","ancient planet,10%","barren planet,60%","barren planet,40%","barren planet,20%","gas giant,60%","gas giant,40%","gas giant,20%","gas giant,10%","asteroid belt,0-2"]);
@app.route('/api/v1.0/stars', methods=['GET'])
def get_stars():
    count = int(request.args.get('count', 200))
    return jsonify({
        'stars': [Star().as_dict() for i in range(count)],
    })
