from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

# Ruta de login
@app.route('/')
@app.route('/login')
def login():
    return render_template('login.html')

# Dashboard protegido (simulado)
@app.route('/dashboard')
def dashboard():
    # Datos de ejemplo para el dashboard
    cards = [
        { 'title': 'SOUNDRECORDING', 'icon': 'FileText', 'icon_color': '#624bff', 'bg': '#e0dcfe', 'value': 1000, 'count': 2 },
        { 'title': 'PUBLISHING',    'icon': 'BarChart3', 'icon_color': '#0dcaf0', 'bg': '#e7fafe', 'value': 132,  'count': 28 },
        { 'title': 'MLC',           'icon': 'User',      'icon_color': '#dc3545', 'bg': '#fbebec','value': 343434, 'count': 1 },
        { 'title': 'SAYCO',         'icon': 'RefreshCcw','icon_color': '#28a745', 'bg': '#eaf6ec','value': 3434,   'assigned_pct': 95, 'unassigned_pct': 5 }
    ]
    projects = [
        { 'name': 'Nelsa web developement',  'manager': 'Om prakash sao',   'date': 'May 25, 2023', 'status': 'Completed', 'progress': 100 },
        { 'name': 'Datascale AI app',       'manager': 'Neilsan mando',    'date': 'Jun 20, 2023', 'status': 'Delayed',   'progress': 35 },
        # ... más filas
    ]
    gauge_value = 72
    stats = { 'total': 95, 'completed': 26, 'delayed': 35, 'ongoing': 35 }

    return render_template(
        'dashboard.html',
        cards=cards,
        projects=projects,
        gauge_value=gauge_value,
        stats=stats
    )

if __name__ == '__main__':
    app.run(debug=True)