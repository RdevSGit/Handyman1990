<?php
class Database
{
    private $bdd;

    public function __construct()
    {
        //connexion à la bdd à mettre dans la proporiété bdd
        try {
            $this->bdd = new PDO('mysql:host=localhost;dbname=cregyhsw_site_fabrice;charset=utf8', 'cregyhsw_fabrice', 'Y6dy0vY6:1SDa?');
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
    public function getBdd()
    {
        return $this->bdd;
    }
}
