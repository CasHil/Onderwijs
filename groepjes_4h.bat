set /p group_size="Hoe groot moeten de groepjes zijn? "

@REM Execute the command below to create the groups
py .\groepjes_maken.py .\klassen\4h.txt %group_size%