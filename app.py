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

# Rutas para reportes resumidos mensuales
@app.route('/reportes/resumidos/mensuales')
def reportes_resumidos_mensuales():
    # Datos de ejemplo para los reportes mensuales
    reportes = [
        {
            'id': 1,
            'mes': 'Febrero',
            'año': 2025,
            'monto': 345023.00,
            'perfiles': 5,
            'estado': 'Finalizado'
        },
        {
            'id': 2,
            'mes': 'Marzo',
            'año': 2025,
            'monto': 500000.23,
            'perfiles': 7,
            'estado': 'Finalizado'
        },
        {
            'id': 3,
            'mes': 'Abril',
            'año': 2025,
            'monto': 230000.34,
            'perfiles': 4,
            'estado': 'Finalizado'
        },
        {
            'id': 4,
            'mes': 'Mayo',
            'año': 2025,
            'monto': 900000.43,
            'perfiles': 9,
            'estado': 'Finalizado'
        }
    ]
    return render_template('reportes/resumidos_mensuales.html', reportes=reportes)

# Ruta para reportes resumidos por periodo
@app.route('/reportes/resumidos/periodo')
def reportes_resumidos_periodo():
    return render_template('reportes/resumidos_periodo.html')

# Ruta para reportes detallados mensuales
@app.route('/reportes/detallados/mensuales')
def reportes_detallados_mensuales():
    return render_template('reportes/detallados_mensuales.html')

# Ruta para reportes detallados por periodo
@app.route('/reportes/detallados/periodo')
def reportes_detallados_periodo():
    return render_template('reportes/detallados_periodo.html')

# Ruta para descargar un reporte
@app.route('/reportes/descargar/<int:id>')
def descargar_reporte(id):
    # Aquí implementarías la lógica para descargar el reporte
    return redirect(url_for('reportes_resumidos_mensuales'))

# Ruta para ver detalles de un reporte
@app.route('/reportes/detalles/<int:id>')
def detalles_reporte(id):
    # Aquí implementarías la lógica para mostrar los detalles
    return redirect(url_for('reportes_detallados_mensuales'))

# Ruta para filtrar por artistas (AJAX)
@app.route('/reportes/filtrar-artistas', methods=['POST'])
def filtrar_artistas():
    data = request.json
    artistas = data.get('artistas', [])
    # Aquí implementarías la lógica para filtrar por artistas
    return jsonify({'success': True, 'artistas': artistas})

if __name__ == '__main__':
    app.run(debug=True)