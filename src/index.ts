import server from './server'

function main() {
  server.listen(3000)
  // tslint:disable-next-line: no-console
  console.log('Server running in port 3000')
}

main()
