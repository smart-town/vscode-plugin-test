
const template = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    <style>
        html {
            width:100%;
            height: 100%;
        }
        body{
            width:100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <iframe style="width:100%;height:100%;border:none" src="http://localhost:8080"></iframe>
</body>
</html>
`;
export default {
  "template": template,
}