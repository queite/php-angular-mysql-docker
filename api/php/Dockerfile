FROM php:8.0-apache

RUN a2enmod rewrite  # Habilita o mod_rewrite
RUN a2enmod headers
RUN docker-php-ext-install mysqli