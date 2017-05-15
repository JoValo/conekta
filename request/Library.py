import requests

class _response:
	def __init__(self):
		self.ok = ""
		self.error = ""

class Book:
	def __init__(self, obj=None):
		if(obj is not None):
			self.title = obj.values()[1]
			self.author = obj.values()[0]
			self._response = _response	
		else:
			self.title = ""
			self.author = ""
			self._response = _response

	def _url(self,params):
		return 'http://localhost:9000' + params

	def postBook(self):
		print self.title
		print self.author
		url = self._url('/books')
		res = requests.post(url, data={'title': self.title,'author': self.author,})
		print res.json()
		self._response.ok = "true"
		return res

	def getBook(self,id):
		url = self._url('/books/{}'.format(id))
		res = requests.get(url)
		if(res.json()['ok'] == False):
			self._response.ok = "false"
			self.title  = ""
			self.author = ""
		else:
			self.title  = res.json()['item']['book']['title']
			self.author = res.json()['item']['book']['author']
			print res.json()
			self._response.ok = "true"
		return res.json()['ok']
	