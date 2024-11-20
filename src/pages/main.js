fetch("https://vswsodotemqlbgkansvw.supabase.co/rest/v1/kidsaid",{
    method:"GET",
    headers: {
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzd3NvZG90ZW1xbGJna2Fuc3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5NTEwODQsImV4cCI6MjA0NzUyNzA4NH0.pUFU0h3lIQ7RLoO73Y4kRmPo6jOgzFLuU-n50PvtRUI"
    },
})
.then(res=>res.json())
.then(showData)

function showData(kidsaid){
    // console.log(kidsaid);
    items.forEach()
}

// function (){}
