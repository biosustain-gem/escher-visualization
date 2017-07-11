FROM php:7-apache

RUN a2enmod rewrite
RUN service apache2 restart

RUN chown -R www-data:www-data ../html
RUN chmod -R 770 ../html

