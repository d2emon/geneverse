import random
import math

from flask import send_file

from app import app

from genimage import save_image
from spaceimage import Universe, SpaceWall, SuperCluster, draw_universe


@app.route('/space/img-<int:size>.png')
def get_space_img(size, scale=10):
    u = Universe(size, size, size)
    # Slone's Wall
    u.clusters.append(SpaceWall(
        x=random.randrange(size),
        y=random.randrange(size),
        z=0,
        size=int(1.3 * scale),
    ))
    # Pisces-Ceti
    u.clusters.append(SuperCluster(
        x=random.randrange(size),
        y=random.randrange(size),
        z=0,
        size=int(.946 * scale),
    ))
    # Virgo's Supercluster
    u.clusters.append(SuperCluster(
        x=random.randrange(size),
        y=random.randrange(size),
        z=0,
        size=int(.189 * scale),
    ))

    # Eridan's Void
    u.add_void(
        size=int(9 * scale)
    )
    u.add_void(
        size=255
    )

    return send_file(save_image(draw_universe(u)), mimetype='image/jpeg')
