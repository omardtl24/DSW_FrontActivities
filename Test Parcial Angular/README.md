# Steps

1. Install Angular `npm install -g @angular/cli`

2. Create project `ng new --no-standalone mynewapp` (Estilos CSS y renderizado SSR no)

3. Install Bootstrap `npm install --save bootstrap`

4. Add to angular.json file:

```
"styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/styles.css"
],
```

5. Generate environments `ng generate environments`

6. Definir ambiente de desarrollo

```
const baseUrl = "http://route-data"

export const environment = {
    production: false,
    baseUrl
}
```

7. Execute app `ng serve`

8. Crear modulos solicitados (Angular Files)

9. Importar modulo creado en modulo principal

```
imports: [
    BrowserModule,
    AppRoutingModule,
    NEWMODULE
  ]
```

10. Crear componentes asociados (Angular Files) y fijar en standalone en false

```
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
  standalone: false
})
```

11. Definir clase del modelo usando class en el modulo creado (Angular Files)

12. Definir servicio de consumo de API

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

private apiUrl = environment.baseUrl + '/data.json'

constructor(private http: HttpClient) { }

getCourses(): Observable<Paciente[]> {
  return this.http.get<Paciente[]>(this.apiUrl);
}
}
```

13. Importar modulo HttpClient en modulo principal

14. Definir componente de listado en el modulo (Angular Files)

15. Definir la carga de datos desde url usando http (Usar servicio)

16. Cargar la tabla en el html del componente de listado