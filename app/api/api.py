from flask import Flask, jsonify, redirect, request, render_template, url_for

# from flask_login import login_required, current_user, LoginManager

app = Flask(__name__)

@app.route('/')
def root():
    return "This is the backend"

@app.route('/test')
def test():
	return jsonify({"message": "hello there"})

'''
# This route will be just a basic login through pitt passport. depending on what information we can get from passport
# we'll then to one of the landing pages
@app.route('/home', methods=['GET', 'POST'])
# @login_required
def home():
    return render_template("/home/home.html", code=302)


@app.route('/uta-home')
def uta_home():
    return render_template("/landingPages/uta.html", code=302)


@app.route('/ptig-home')
def ptig_home():
    return render_template("/landingPages/ptig.html", code=302)


@app.route('/faculty-home')
def faculty_home():
    return render_template("/landingPages/faculty.html", code=302)


@app.route('/admin-home')
def admin_home():
    return render_template("/landingPages/admin.html", code=302)


@app.route('/grad-ta-home')
def gradta_home():
    return render_template("/landingPages/gradta.html", code=302)
'''

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
