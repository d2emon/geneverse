import pytest

import os
import tempfile

from app import app


@pytest.fixture
def client():
    # db_fd, app.config['DATABASE'] = tempfile.mkstemp()
    # app.testing = True
    app.config['TESTING'] = True
    app_client = app.test_client()
    # context.client = app.test_client()
    # with app.app_context():
    #     init_db()

    yield app_client
    # -- CLEANUP;
    # os.close(context.db)
    # os.unlink(app.config['DATABASE'])


def test_empty_db(client):
    """
    Start with a blank database.
    :return:
    """
    rv = client.get('/')
    print(rv, rv.status, rv.status_code)
    assert b"No entries here so far" not in rv.data


def test_status_200(client):
    """
    Start with a blank database.
    :return:
    """
    rv = client.get('/')
    assert rv.status_code == 200


def test_error_404(client):
    """
    Start with a blank database.
    :return:
    """
    rv = client.get('/page-not-found')
    assert rv.status_code == 404


def test_get_generators(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/list')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_generated(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/generate/universe')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_meta(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/meta/universe')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_img(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/img-32.png')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_empty_img(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/empty-img-32.png')
    assert rv.status_code == 200
    # TODO: Make more complex test
    rv = client.get('/empty-img-32-1.png')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_multiverse(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/multiverse')
    assert rv.status_code == 200
    # TODO: Make more complex test
    rv = client.get('/api/v1.0/multiverse-1')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_universe(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/universe')
    assert rv.status_code == 200
    # TODO: Make more complex test
    rv = client.get('/api/v1.0/universe-1')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_cluster(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/cluster')
    assert rv.status_code == 200
    # TODO: Make more complex test
    rv = client.get('/api/v1.0/cluster-1')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_galaxy(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/galaxy')
    assert rv.status_code == 200
    # TODO: Make more complex test
    rv = client.get('/api/v1.0/galaxy-1')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_nebula(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/nebula')
    assert rv.status_code == 200
    # TODO: Make more complex test
    rv = client.get('/api/v1.0/nebula-1')
    assert rv.status_code == 200
    # TODO: Make more complex test


def test_get_stars(client):
    """
    Test getting generators.
    :return:
    """
    rv = client.get('/api/v1.0/stars')
    assert rv.status_code == 200
    # TODO: Make more complex test
