from behave import *
from app import app


@fixture
def flask_client(context, *args, **kwargs):
    # context.db, app.config['DATABASE'] = tempfile.mkstemp()
    app.testing = True
    context.client = app.test_client()
    # with app.app_context():
    #     init_db()
    yield context.client
    # -- CLEANUP;
    # os.close(context.db)
    # os.unlink(app.config['DATABASE'])


def before_feature(context, feature):
    # -- HINT: Recreate a new flask client before each feature is executed
    use_fixture(flask_client, context)
